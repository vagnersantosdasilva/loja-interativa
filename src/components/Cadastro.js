import ProductForm from "./ProductForm";
import {useState} from "react";
import ProductList from "./PorductList";
import {useProduct} from "../hooks/useProduct";

const Cadastro = ()=>{

    const [product,setProduct] = useState( {id:0,nome:"",fabricante:[],categoria:[],quantidade:0});
    const service = useProduct();
    const list = service.list()

    const onSubmitHandler = (event)=>{
        alert('teste');

    }
    const onInputChangeHandler = ()=>{

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div >
                        <h4>Cadastro de Produtos</h4>
                        <form >
                            <div className="form-group">
                                <label htmlFor="email"><strong>Nome do produto</strong></label>
                                <input type="nome" className="form-control" name="nome"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fabricante">Fabricante</label>
                                <select name="cars" id="fabricante"  name = "fabricante" className="form-control ">
                                    <option value="f1">Fabricante 1</option>
                                    <option value="f2">Fabricante 2</option>
                                    <option value="f3">Fabricante 3</option>
                                    <option value="f4">Audi</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <select name="cars" id="fabricante"  name = "fabricante" className="form-control ">
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
                     <h4>Listagem</h4>
                    <div>
                        {list.map(i =>

                            <div className="row">
                                <div className="col">{i.name}</div>
                                <div className="col">{i.fabricante.name}</div>
                                <div className="col">{i.fabricante.categoria}</div>
                                <div className="col">{i.quantidade}</div>
                                <div className="col">{i.preco}</div>
                                <div className="col">Editar</div>
                                <div className="col">Deletar</div>

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cadastro;