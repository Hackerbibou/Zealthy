import supabase from "..";

async function editAdmin(settings){


    const { data, error } = await supabase
    .from('adminsettings')
    .update({ aboutme1:settings.aboutme1, 
        aboutme2:settings.aboutme2, 
        adress1:settings.adress1, 
        adress2:settings.adress2, 
        birthday1:settings.birthday1, 
        birthday2:settings.birthday2 })
    .eq('id', 1)
    .select()
            
}

async function readSettings(){

    let { data: adminsettings, error } = await supabase
    .from('adminsettings')
    .select('*')
    .eq('id',1)

    return adminsettings[0]
            

}


export default {
    editAdmin,
    readSettings
}