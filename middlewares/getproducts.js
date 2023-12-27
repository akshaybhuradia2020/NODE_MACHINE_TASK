
export async function getproductdetails(req, res, next){
    const req_external_api = await fetch("https://dummyjson.com/products");
    const get_data = await req_external_api.json();
    res.locals.data = get_data;
    next();
}