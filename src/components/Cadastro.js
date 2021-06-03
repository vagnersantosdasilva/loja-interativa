import {useEffect, useState} from "react";
import {useProduct} from "../hooks/useProduct";

const Cadastro = ()=>{

    const [product,setProduct] = useState( {id:1,nome:"teste",fabricante:[],categoria:[],quantidade:0});
    const [list,setList] = useState(null);
    const service = useProduct();


    useEffect(()=>{
        setList(service.products);
    },service.products);

    const onSubmitHandler = (event)=>{
        alert('teste');

    }
    const onInputChangeHandler = ()=>{

    }
    const onEditHandler=(product)=>{
        alert(product.id);
    }

    const onDeleteHandler=(product)=>{
        let products = service.remove(product);
        setList(products);
    }

    if (list!==null){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div >
                            <h4>Cadastro de Produtos</h4>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="email"><strong>Nome do produto</strong></label>
                                    <input type="nome" className="form-control" name="nome" value={product.id!==0?product.name:''}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fabricante">Fabricante</label>
                                    <select name="cars" id="fabricante"  name = "fabricante" className="form-control ">
                                        <option value="f1">Selecione um fabricante</option>
                                        <option value="f1">Fabricante 1</option>
                                        <option value="f2">Fabricante 2</option>
                                        <option value="f3">Fabricante 3</option>
                                        <option value="f4">Audi</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="categoria">Categoria</label>
                                    <select name="cars" id="fabricante"  name = "fabricante" className="form-control ">
                                        <option value="f1">Selecione uma Categoria</option>
                                        <option value="c1">Categoria 1</option>
                                        <option value="c2">Categoria 2</option>
                                        <option value="c3">Categoria 3</option>
                                        <option value="c4">Categoria</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="quantidade"><strong>Quantidade</strong></label>
                                    <input type="text" name="quantidade" className="form-control" />

                                </div>
                                <button  className="btn btn-info" onClick={onSubmitHandler}>Adicionar Produto</button>
                            </form>

                        </div>
                    </div>

                    <div className="col">
                         <h4>Produtos Cadastrados</h4>
                        <div>
                            {list.map(i =>

                                <div className="row">
                                    <div className="col">{i.name}</div>
                                    <div className="col">{i.fabricante.name}</div>
                                    <div className="col">{i.fabricante.categoria}</div>
                                    <div className="col">{i.quantidade}</div>
                                    <div className="col">{i.preco}</div>
                                    <div className="col"><a href="#" onClick={event =>onEditHandler (i)}>Editar</a></div>
                                    <div className="col"><a href="#" onClick={event => onDeleteHandler(i)}>Deletar</a></div>

                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    return (<div> ... </div>);

}

export default Cadastro;