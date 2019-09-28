const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]



let depts=[];
function PrintDepts(depts){
    let a = '<ul>'
    let   b = '</ul>'
    let m = []
    
    for (let i=0; i<depts.length; i += 1){
        if ('name' in depts[i]){
            m += '<li>' + depts[i]['name'] + '</li>';
        }
        if(typeof (depts[i]) === 'object'){
            m += PrintDepts(depts[i]['children'])
        }
    }
    return document.getElementById('output1').innerHTML = a + m + b;
}
PrintDepts(org1_depts);

let depts2=[];
function PrintDepts2(depts2){
    let a = '<ul>'
    let   b = '</ul>'
    let m = []
    
    for (let i=0; i<depts2.length; i += 1){
        if ('name' in depts2[i]){
            m += '<li>' + depts2[i]['name']+ '</li>';
        }
        if(typeof (depts2[i]) === 'object'){
            m += PrintDepts2(depts2[i]['children'])
        }  
    }
    return document.getElementById('output2').innerHTML = a + m + b;
}
PrintDepts2(org2_depts);


