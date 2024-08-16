import supabase from "..";

async function login(email,password){

let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  console.log(data)
  return data
}
async function signup(email,password){

let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
        data: {
            about_me:'',
            birthday:'',
            street_address:'',
            city:'',
            state:'',
            zip:''
        },
      },
  })
  console.log(data)
  return data
  
}
async function getUser(){

const { data: { user } } = await supabase.auth.getUser()
    return user
}
async function editData(value){
const user = await getUser()
const metadata = user.user_metadata
const address=value.street_address+' '+ value.city+', '+value.state+' '+value.zip
const { data, error } = await supabase.auth.updateUser({
    data: {
        "adress": address,
        "zip": value.zip!=''?value.zip:metadata.zip,
        "city": value.city!=''?value.city:metadata.city,
        "email": value.email!=''?value.email:metadata.email,
        "state": value.state!=''?value.state:metadata.state,
        "about_me": value.about_me!=''?value.about_me:metadata.about_me,
        "birthday": value.birthday!=''?value.birthday:metadata.birthday,
        "street_address": value.street_address!=''?value.street_address:metadata.street_address
    }
  })

  console.log(data)
  console.log(error)
  
}
async function createUser(value){
    const user = await getUser()
    const metadata = user.user_metadata
    const address=value.street_address+' '+ value.city+', '+value.state+' '+value.zip
const { data, error } = await supabase
.from('users')
.insert([
  { "zip": value.zip!=''?value.zip:metadata.zip,
    "adress": address,
        "city": value.city!=''?value.city:metadata.city,
        "email": user.email,
        "state": value.state!=''?value.state:metadata.state,
        "about_me": value.about_me!=''?value.about_me:metadata.about_me,
        "birthday": value.birthday!=''?value.birthday:metadata.birthday,
        "street_address": value.street_address!=''?value.street_address:metadata.street_address
   },
])
.select()

return 'user added'
        
} 

export default{
    createUser,
    login,
    signup,
    getUser,
    editData
}