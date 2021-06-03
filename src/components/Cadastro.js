import {useEffect, useState} from "react";
import {useProduct} from "../hooks/useProduct";

const Cadastro = ()=>{

    const [product,setProduct] = useState( {id:0,nome:"",fabricante:null,categoria:null,quantidade:0,preco:0});
    const [list,setList] = useState(null);
    const service = useProduct();


    useEffect(()=>{
        setList(service.products);
    },service.products);

    const onClickHandler = (event)=>{
        event.preventDefault();
        console.log(product);
        let list = service.add(product);
        setList(list);


    }
    const onInputChangeHandler = (event)=>{
        const field = event.target.name;
        const value = event.target.value;
        setProduct({...product,[field]:value});
    }
    const onEditHandler=(product)=>{
        setProduct(product);
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
                                    <label htmlFor="nome"><strong>Nome do produto</strong></label>
                                    <input type="text" className="form-control" name="nome" value={product.name}
                                    onChange={onInputChangeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fabricante">Fabricante</label>
                                    <select name="cars" id="fabricante"  name = "fabricante" className="form-control "
                                            value={product.fabricante!==null?product.fabricante:''} onChange={onInputChangeHandler}>
                                        <option >Selecione o fabricante</option>
                                        <option value="f1">Fabricante 1</option>
                                        <option value="f2">Fabricante 2</option>
                                        <option value="f3">Fabricante 3</option>
                                        <option value="f4">Fabricante 4</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="categoria">Categoria</label>
                                    <select name="cars" id="fabricante"  name = "categoria"
                                            className="form-control " onChange={onInputChangeHandler}
                                            value={product.categoria!==null?product.categoria:''}>
                                        <option >Selecione uma Categoria</option>
                                        <option value="c1">Categoria 1</option>
                                        <option value="c2">Categoria 2</option>
                                        <option value="c3">Categoria 3</option>
                                        <option value="c4">Categoria</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="quantidade"><strong>Quantidade</strong></label>
                                    <input type="text" name="quantidade" className="form-control"
                                           value ={product.quantidade!==0?product.quantidade:''} onChange={onInputChangeHandler}/>

                                </div>

                                <div className="form-group">
                                    <label htmlFor="preco"><strong>Valor Unidade</strong></label>
                                    <input type="text" name="preco" className="form-control"
                                           value ={product.preco!==0?product.preco:''} onChange={onInputChangeHandler}/>

                                </div>

                                <button type="button" className="btn btn-info" onClick={onClickHandler}>
                                    {product.id===0?'Adicionar Produto':'Alterar'}
                                </button>
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