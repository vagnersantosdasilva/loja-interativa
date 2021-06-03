
const api = ()=>{
    const getList = ()=>{
        let products = [{   id:1,
                name:"Product1",
                fabricante: { name:"f1",categoria:"c1"},
                quantidade:10,
                preco:"R$10"
            },
            {   id:2,
                name:"Product2",
                fabricante: { name:"f1",categoria:"c1"},
                quantidade:10,
                preco:"R$10"
            },
            {   id:3,
                name:"Product3",
                fabricante: { name:"f1",categoria:"c1"},
                quantidade:10,
                preco:"R$10"
            }
    ];

        return products;
    }
}