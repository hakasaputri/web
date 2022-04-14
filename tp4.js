class Application extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      
      display: false,
      nama : "",
      tanggal : "",
       jk : "",
      hobi : "",
       agama : "",
      pesan : "",
      
    };
  }
  
 inputCheck = (e) => {
   let filter = e.target.getAttribute('filter')   
   e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')   
   this.setState({[e.target.name]: e.target.value})
   
 }
  
 submitCheck = () => {
   this.setState({display: true})
}
 
  displayForm() {
    return (
      <div className="form" class="m-4">
        <div className="inputcontainer">
         <label class="form-label">Nama Lengkap</label>
                        <input onChange={this.inputCheck} type="text" id="nama" name ="nama" class="form-control"/>
                 
                  
                    <div class="mt-3">
                        <label class="form-label">Tanggal Lahir</label>
                    </div>
                    <div class="form-group">
                        <input name ="tanggal" onChange={this.inputCheck}type="date" class="form-control" id="tgllahir" aria-describedby="emailHelp" />
                    </div>
                  
                    <div class="mt-3">
                        <label class="form-label">Jenis Kelamin</label>
                    </div>
                    <div class="form-check form-check-inline" id="jkel">
                        <input  onChange={this.inputCheck} class="form-check-input" type="radio" name="jk" id="inlineRadio1" value="Laki-laki" />
                        <label class="form-check-label" for="inlineRadio1">Laki-laki</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="radio" name="jk" id="inlineRadio2" value="Perempuan" />
                        <label class="form-check-label" for="inlineRadio2">Perempuan</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="radio" name="jk" id="inlineRadio3" value="other" />
                        <label class="form-check-label" for="inlineRadio3">Other</label>
                    </div>
                  
                    <div class="mt-3">
                        <label class="form-label">Hobi</label>
                    </div>
                    <div class="form-check form-check-inline" id="hobi">
                        <input name ="hobi"  onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Ngoding" />
                        <label class="form-check-label" for="inlineCheckbox1">Ngoding</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Rebahan" name ="hobi" />
                        <label class="form-check-label" for="inlineCheckbox2">Rebahan</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Melamun" name ="hobi" />
                        <label class="form-check-label" for="inlineCheckbox3">Melamun</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Baca Buku" name ="hobi" />
                        <label class="form-check-label" for="inlineCheckbox4">Baca Buku</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox5" value="Nonton Youtube" name ="hobi" />
                        <label class="form-check-label" for="inlineCheckbox5">Nonton Youtube</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox6" value="Dengerin Lagu" name ="hobi"/>
                        <label class="form-check-label" for="inlineCheckbox6">Dengerin Lagu</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input onChange={this.inputCheck} class="form-check-input" type="checkbox" id="inlineCheckbox7" value="Other" name ="hobi" />
                        <label class="form-check-label" for="inlineCheckbox7">Other</label>
                      </div>
                      
                      <div class="mt-3">
                        <label class="form-label">Agama</label>
                        </div>
                      <select name ="agama" onChange={this.inputCheck} class="form-select" id="agama" aria-label="Default select example">
                        <option value="Budha">Budha</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Islam">Islam</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Tao">Tao</option>
                        <option value="Protestan">Protestan</option>
                        <option value="Other">Other</option>
                      </select>
                     
                      <div class="mt-3">
                        <label class="form-label">Pesan</label>
                        </div>
                        <div class="form-group">
                            <textarea onChange={this.inputCheck} class="form-control" id="pesan" name="pesan" rows="3"></textarea>
                          </div>
          
          <button onClick={this.submitCheck} class="btn btn-primary mt-4" id="button">Submit</button>
        </div>
      </div>
    );
  }
  
  displayData() {
    return (
      <div className="form">
      
         <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Label</th>
                        <th scope="col">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Nama</th>
                        <td id="tnama">{this.state.nama}</td>
                      </tr>
                      <tr>
                        <th scope="row">Tanggal Lahir</th>
                        <td id="ttgl">{this.state.tanggal}</td>
                      </tr>
                      <tr>
                        <th scope="row">Jenis Kelamin</th>
                        <td id="tjkel">{this.state.jk}</td>
                      </tr>
                      <tr>
                        <th scope="row">Hobi</th>
                        <td id="thobi">{this.state.hobi}</td>
                      </tr>
                      <tr>
                        <th scope="row">Agama</th>
                        <td id="tagama">{this.state.agama}</td>
                      </tr>
                      <tr>
                        <th scope="row">Pesan</th>
                        <td id="tpesan">{this.state.pesan}</td>
                      </tr>
                    </tbody>
                  </table>     
      </div>
    )
  }
  render() {
   
    return this.state.display ? this.displayData() : this.displayForm();
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));