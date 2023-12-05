import { Post } from "../Model/post";
 export class postService{
     // create  a post 
    async createPost(data:any){
    try{
        const newPost = await Post.create(data)
         return newPost
    }
      catch (error){
        console.log(error);
        
       } }
       // get all post 
        async getPosts(){
            try{
                const posts= await Post.find({})
                 return posts
            }
            catch(error){
                console.log(error);
                
            }
        }
          // get a single post 
        async getPost(id: string) {
      
            try {
                const post = await Post.findById({_id:id})
                if (!post) {
                    return 'post not available'
                }
                return post
    
            } catch (error) {
                console.log(error)
            }
        }
        // update a post
        async updatePost (id:string, data:any){
            try{
                // pass the id object 
            const postz= await Post.findByIdAndUpdate({_id:id},
                data , {new:true})
                if(!postz){
                    return "post not avaialble"
                }
                 return postz
            }
             catch (error){
                console.log(error);
              }
        }
        // delete a post 
        async deletePost(id:string){
            try{
                // pass the id object 
              const post= await Post.findByIdAndDelete(id)
                if(!post){
                    return "post not avaialble"
                }
                 
            }
             catch (error){
                console.log(error);
              }
        }
    }
     export const postServices= new postService()