export const renplaceNullObjects = (arrays)=>{
   let value =  arrays.rows.map((object)=>{
       return replaceNull(object.dataValues);

   })

   console.log(value);
   return value;

}

export const replaceNull = (object) => {
  for (let socio in object) {
    if (object[socio] == null) object[socio] = "";
  }
  return object;
};
