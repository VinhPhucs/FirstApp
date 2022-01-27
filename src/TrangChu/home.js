import './menu.css';

function home() {
  return (
    <div className='menu'>
          <div className='logo'>
            <img src='./insight-05 1.png'></img>
          </div>
          <div className='frame'>
            
            <div className='frame-ob'>
                <b><img src='./home.png'></img> Trang chủ</b>
                <p><img src='./ticket.png'></img> Quản lý vé</p>
                <p><img src='./invoice.png'></img>  Đối soát vé</p>
                {/* <p><img src='./Danhsach.png'></img>  Danh sách sự kiện</p>
                <p><img src='./Quanlythietbi.png'></img>  Quản lý thiết bị</p> */}
                <p><img src='./setting.png'></img>  Cài đặt</p>
            </div>
            
          </div> 
          <div className='ob1'>
              <h1>Gói dịch vụ</h1> 
            </div>
            <div className='nav-bar'>
              <div className='mail'><p><img src='./mail.png'></img></p> </div>
              <div className='bell'><p><img src='./bell.png'></img> </p></div>
              <div className='user'><p><img src='./avatar.png'></img></p> </div>
            </div>

            <div className='search'>
                <input style={{width:'100%',background: '#EDE6E6',borderRadius:'3px',height:'25px'}} type={Text} name='search' placeholder='Search'></input> 
                <div className='search-icon'>
                  <img  src='./search.png'></img> 
                </div>
            </div>
          
    </div>
  )
  
}

export default home;