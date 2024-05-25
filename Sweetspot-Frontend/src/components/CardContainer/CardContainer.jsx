import Card from "../Card/Card"
import "./CardContainer.css"


function CardContainer() {
    return(
        <div className="cards-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <Card
                  imageUrl="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Cake"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus aperiam, voluptatum "
                  price="100"
                />
              </div>
              <div className="col">
              <Card
                  imageUrl="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Cake"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus aperiam, voluptatum "
                  price="100"
                />
              </div>
              <div className="col">
              <Card
                  imageUrl="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Cake"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus aperiam, voluptatum "
                  price="100"
                />
              </div>
              <div className="col">
              <Card
                  imageUrl="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
                  title="Cake"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus aperiam, voluptatum "
                  price="100"
                />
              </div>
              <div className="col">
              <Card
                  imageUrl="https://plus.unsplash.com/premium_photo-1672986896021-cf725eba8ba3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Cake"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus aperiam, voluptatum "
                  price="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default CardContainer