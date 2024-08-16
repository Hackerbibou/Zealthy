import supabase from "..";

async function viewAll(){

    let { data: users, error } = await supabase
    .from('users')
    .select('*')

    return users

}
export default{
    viewAll
}