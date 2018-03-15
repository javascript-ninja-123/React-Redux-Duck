import axios from 'axios';


export const fileReader = (file) => {
const reader  = new FileReader();
if(file) {
   reader.readAsText(file);
}
reader.onloadend = () => {
  console.log(reader.result)
};
}

const tryCatch = async(fn) => {
  try{
    return await fn()
  }
  catch(err){
    return err;
  }
}


export const fetchCallNullable = async(url) => {
   const data = await tryCatch(() => axios.get(url))
   return data.data !== undefined ? Right(data.data) : Left(null)
}


export const Right = x => ({
  map:fn => Right(fn(x)),
  inspect:() => `Right(${x})`,
  fold:(f,g) => g(x),
  compose:(...fns) => Right(fns.reduce((acc,fn) => fn(acc),x))
})


export const Left = x => ({
  map:fn => Left(x),
  inspect:() => `Left(${x})`,
  fold:(f,g) => f(x),
  compose:(...fns) => Left(x)
})


export const maybe = predicate => x => predicate(x) ? [x] : [];
export const arrayMaybe = predicate => x => predicate(x) ? [...x] : [];
