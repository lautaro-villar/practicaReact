import React from 'react';
import './main.css';
//import './src/components/componentsLayaout/components.css'


const Main = () => {
    return (
        
        <main>

        <div class="container-fluid mt-5">
            <div class="row justify-content-center">
              <div class="col-md-5">
                <div class="card card-custom">
                  <div class="card-header">
                    <h2 class="mb-0">Formulario de Contacto</h2>
                  </div>
                  <div class="card-body">
                    <form action="formulario.php" method="POST">
                      <div class="form-group">
                        <label for="nombre"><i class="fas fa-user"></i> Nombre:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required/>
                      </div>
                      <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Correo Electrónico:</label>
                        <input type="email" class="form-control" id="email" name="email" required/>
                      </div>
                      <div class="form-group">
                        <label for="mensaje"><i class="fas fa-comment"></i> Mensaje:</label>
                        <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Enviar Mensaje</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    </main>

    );
};

export default Main;
