import ProductForm from "./ProductForm";

const Cadastro = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ProductForm></ProductForm>
                </div>

                <div className="col">
                     <h4>Listagem</h4>
                </div>

            </div>
        </div>
    );
}

export default Cadastro;