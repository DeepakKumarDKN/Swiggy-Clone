function CollegeStats (){
    let totalStudents = 46
    let studentsRegistered = 40
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(totalStudents < studentsRegistered){
                resolve('Our Class Is Full')
            }else{
                reject('Our Class is not Full')
            }
        },3000)

    console.log('Data is getting checked') 
    
    })
    
}
CollegeStats().then((value)=> {
    console.log(value)
}).catch((error)=>{
    console.log(error)
})