import fs from "fs"
import path from "path";


export const getPostList = () => {
  try {
    const postDir = path.join(process.cwd(), "pages/post");
    return fs.readdirSync(postDir).map(filename => {
      return filename.substring(0,filename.indexOf("."))
    })
  } catch(error) {
    console.warn("There are no posts");
    return []
  }
}