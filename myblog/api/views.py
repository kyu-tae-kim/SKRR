from django.http import JsonResponse
from django.views.generic.list import BaseListView
from api.utils import obj_to_post, prev_next_post, obj_to_comment
from blog.models import Post, Category, Tag, Comment
from django.views.generic.detail import BaseDetailView
from django.views import View
from django.views.generic.edit import BaseCreateView
# Create your views here.

class ApiPostLV(BaseListView):

    def get_queryset(self):
        paramCate=self.request.GET.get('category')
        paramTag = self.request.GET.get('tag')
        if paramCate:
            qs = Post.objects.filter(category__name__iexact= paramCate)
        elif paramTag:
            qs = Post.objects.filter(tags__name__iexact= paramTag)
        else:
            qs= Post.objects.all()

        return qs 


        return super().get_queryset()
    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postList = [ obj_to_post(obj, False) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)

class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        prevPost, nextPost = prev_next_post(obj)
        
        commentqs = obj.comment_set.all()
        commentList = [obj_to_comment(obj) for obj in commentqs]

        jsonData = {
            'post': post,
            'prevPost' : prevPost,
            'nextPost' : nextPost,
            'commentList' : commentList,
        }
    
        return JsonResponse(data=jsonData, safe=True, status=200)
    
class ApiCateTagView(View):
    def get(self, request, *args, **kwargs):
        qs1 = Category.objects.all()
        qs2 = Tag.objects.all()
        cateList= [cate.name for cate in qs1]
        tagList= [tag.name for tag in qs2]
        jsonDate = {
            'cateList' : cateList,
            'tagList' : tagList,
        }
        return JsonResponse(data=jsonDate, safe=True, status=200)
    
class ApiPostLikeDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        obj.like += 1
        obj.save()
        return JsonResponse(data=obj.like, safe=False, status=200)
    
class ApiCommentCV(BaseCreateView):
    model = Comment
    fields = '__all__'

    def form_valid(self, form):
        self.object = form.save()
        comment = obj_to_comment(self.object)
        return JsonResponse(data=comment, safe=True, status=201)

    def form_invalid(self, form):
        print(form.errors)
        return JsonResponse(data=form.errors, safe=True, status=400)