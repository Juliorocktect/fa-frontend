import React from 'react'
import "./Notifications.css"
function Notifications() {
  function disableNotifications(){
    document.getElementById("not").classList.add("disabled")
  }
  function enableNotifications(){
    document.getElementById("not").classList.remove("disabled");
  }

  return (
    <>
        <div className="rest-container" onClick={() => {
          disableNotifications();
        }}></div>
          <div className="notifications" id='not'>
            <h1 className='notificationsTitle'>Notifications</h1>
              <div className="notifications-container">
                <div className="notification">
                  <h2 className="notification-title">Julio Uploaded a newVideo</h2>
                  <div className="notification-video-image"><img className='notification-img' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <div className="notification-timestamp">vor 2 Stunden</div>
                  </div>
                  <div className="notification">
                  <h2 className="notification-title">Julio Uploaded a newVideo</h2>
                  <div className="notification-video-image"><img className='notification-img' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <div className="notification-timestamp">vor 2 Stunden</div>
                  </div>
                  <div className="notification">
                  <h2 className="notification-title">Julio Uploaded a newVideo</h2>
                  <div className="notification-video-image"><img className='notification-img' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <div className="notification-timestamp">vor 2 Stunden</div>
                  </div>
                  <div className="notification">
                  <h2 className="notification-title">Julio Uploaded a newVideo</h2>
                  <div className="notification-video-image"><img className='notification-img' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <div className="notification-timestamp">vor 2 Stunden</div>
                  </div>
                  <div className="notification">
                  <h2 className="notification-title">Julio Uploaded a newVideo</h2>
                  <div className="notification-video-image"><img className='notification-img' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <div className="notification-timestamp">vor 2 Stunden</div>
                  </div>
                  <div className="notification">
                  <h2 className="notification-title">Julio Uploaded a newVideo</h2>
                  <div className="notification-video-image"><img className='notification-img' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <div className="notification-timestamp">vor 2 Stunden</div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Notifications