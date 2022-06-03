let courses=[{type:'Beginer',price:'$99'},{type:'Intermediate',price:'$299'},{type:'Hard',price:'$599'},{type:'Expert',price:'$999'}]

let plansDiv = document.getElementById('plans')

for(i=0;i<courses.length;i++){
    let course=document.createElement('div')
    course.setAttribute('id',i)
    course.innerHTML=`<h5>${courses}</h5>`
}