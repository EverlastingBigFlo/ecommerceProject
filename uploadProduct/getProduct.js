



  // to make screen change on click
  let display = document.getElementById('adminDiplay')

  function dashboard() {
    // const dashboard = document.querySelector('#dashboard')
    display.innerHTML=`
                          <div>
                              <h1 class="header text-white">Welcome back, Anjorin</h1>
                              <p class="header text-white">Here is what is happening with your store today.</p>
                          </div>
                          <div class="dashboardSec">
                              <img src="/images/admin dashboad.jpg" alt="">
                          </div>
    `
    // dashboard.style.backgroundColor = "blue";
  }


  function post() {

    display.innerHTML=`
                    <form class=" text-white adminForm">
                          <h1 class="header text-center">Upload your products here</h1>
                  <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Title</label>
                          <input type="text" class="form-control" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Description</label>
                          <input type="text" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Price</label>
                          <input type="text" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Ratings</label>
                          <input type="text" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="mb-3">
                          <label for="productImg" class="form-label">Product Image</label>
                          <input type="file" name="ProductImage" id="productImg" accept="image/*">            
                  </div>

                  <div class="mb-3">
                          <label for="Category" class="form-label">Category</label>
                          <input type="text" class="form-control" id="">
                  </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                </form>
    `

  }

