import {useState} from "react";

const ProductForm = ()=>{

    const [product,setProduct] = useState( {id:0,nome:"",fabricante:[],categoria:[],quantidade:0});

    const onSubmitHandler = ()=>{

    }

    const onInputChangeHandler = ()=>{

    }

    return (
        <div className="container">
            <h4>Cadastro de Produtos</h4>
            <form >
                <div className="form-group">
                    <label htmlFor="email"><strong>Nome do produto</strong></label>
                    <input type="email" className="form-control" name="email" placeholder="O seu email é também o nome de usuário"
                             disabled="true"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email"><strong>Fabricante</strong></label>
                    <input type="email" className="form-control" name="email" placeholder="O seu email é também o nome de usuário"
                           disabled="true"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email"><strong>Categoria</strong></label>
                   <select>
                       <option>


                       </option>
                   </select>
                </div>

                <div className="form-group">
                    <label htmlFor="email"><strong>Quantidade</strong></label>
                    <input type="email" className="form-control" name="email" placeholder="O seu email é também o nome de usuário"
                           disabled="true"
                    />
                </div>

            </form>

        </div>
    );
}

export default ProductForm;