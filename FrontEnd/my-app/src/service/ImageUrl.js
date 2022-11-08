// google drive photo canbe not shown with sharing url so some change required

function changeImgUrl(url){
    let first = url.slice(0,25);
    let middle = "uc?export=view&id=";
    let last = url.slice(32,65)

    return first + middle +last
}

// let url = "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"

// console.log(changeImgUrl(url))

export default changeImgUrl;