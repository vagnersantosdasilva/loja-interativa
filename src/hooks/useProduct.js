import {useState} from "react";

export  const useProduct = ()=>{


    const [products ,setProducts] = useState( [
        {   id:1,
            name:"Product1",
            fabricante: { name:"f1",categoria:"c1"},
            quantidade:10,
            preco:"R$10"
        },
        {   id:2,
            name:"Product2",
            fabricante: { name:"f3",categoria:"c1"},
            quantidade:10,
            preco:"R$10"
        },
        {   id:3,
            name:"Product3",
            fabricante: { name:"f4",categoria:"c1"},
            quantidade:10,
            preco:"R$10"
        }
    ]);

    const add = (prod)=>{

        let product =  {
            id : products.length+1,
            name:prod.nome,
            fabricante: {
                name:prod.fabricante,
                categoria:prod.categoria
            },
            quantidade:prod.quantidade,
            preco:prod.preco
        }
        console.log(product);
        products.push(product);
        setProducts(products);
        console.log(products);
        return products;
    }

    const list = () =>{
        return products;
    }

    const remove = (product)=>{

        let prod = products.filter(i => i.id!==product.id);
        setProducts(prod);
        return prod
    }



    return {products,list,add,remove};
}

