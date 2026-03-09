[1mdiff --git a/src/pages/login.css b/src/pages/login.css[m
[1mindex ec357dd..ab72246 100644[m
[1m--- a/src/pages/login.css[m
[1m+++ b/src/pages/login.css[m
[36m@@ -13,10 +13,7 @@[m [mcode {[m
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',[m
     monospace;[m
 }[m
[31m-.container{[m
[31m-  flex-direction: row;[m
[31m-  border: solid 3px;[m
[31m-}[m
[32m+[m
 [m
 .App {[m
   text-align: center;[m
[36m@@ -67,6 +64,7 @@[m [mcode {[m
   border-radius: 15px;[m
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);[m
   padding: 20px;[m
[32m+[m[32m  border: #282c34 solid 5px;[m
 }[m
 [m
 .box {[m
[36m@@ -80,18 +78,28 @@[m [mcode {[m
   border-radius: 10px;[m
   margin: 10px;[m
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);[m
[32m+[m[32m  border: 5px solid black;[m
 }[m
 [m
 #left {[m
[31m-  flex: 2;[m
[32m+[m[32m  flex: 1.5;[m
[32m+[m[32m  border: 5px solid black;[m
[32m+[m
 }[m
 [m
 #right {[m
   flex: 1;[m
[32m+[m[32m   background-image: url('../../public/ocean.jpg');[m
[32m+[m[32m    background-size:100% 100%;[m
[32m+[m[32m    position: relative;[m
[32m+[m[32m     display: flex;[m[41m [m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m     align-items: center;[m[41m [m
[32m+[m[32m    padding: 5px;[m
 }[m
 [m
 .top-logo {[m
[31m-  width: 120px;[m
[32m+[m[32m  width: 200px;[m
   margin-bottom: 20px;[m
 }[m
 [m
[36m@@ -152,35 +160,131 @@[m [mcode {[m
   flex-direction: column;[m
   gap: 12px;[m
   width: auto;[m
[31m-  margin-left: auto; /* push to right inside parent container */[m
[31m-  align-items: flex-end;[m
[32m+[m[32m  /*margin-left: auto;  push to right inside parent container */[m
[32m+[m[32m  /* align-items: flex-end; */[m
 }[m
 .google-button, .facebook-button {[m
   display: flex;[m
[32m+[m[32m  width: 250px;[m
[32m+[m[32m  height: 40px;[m
   align-items: center;[m
   justify-content: center;[m
[31m-  padding: 10px;[m
[32m+[m[32m  padding: 20px;[m
   border: none;[m
[31m-  border-radius: 5px;[m
[32m+[m[32m  border-radius: 15px;[m
   font-size: 1rem;[m
   cursor: pointer;[m
[31m-  transition: background-color 0.3s;[m
[32m+[m[32m  border:1px solid #ddd ;[m
[32m+[m[32m  transition: transform 0.2s,background-color 0.3s;[m
 }[m
 [m
 .google-button {[m
   background-color: #f3f4f6;[m
   color: #374151;[m
[32m+[m[32m  margin-top:20px ;[m
 }[m
 [m
 .google-button:hover {[m
[31m-  background-color: #e5e7eb;[m
[32m+[m[32m  background-color: #f1f3f8;[m
[32m+[m[32m transform: scale(1.05);[m
 }[m
 [m
 .facebook-button {[m
   background-color: #3b5998;[m
   color: #ffffff;[m
[32m+[m[32m  margin-top:15px ;[m
 }[m
 [m
 .facebook-button:hover {[m
   background-color: #2d4373;[m
[32m+[m[32m   transform: scale(1.05);[m
[32m+[m[32m}[m
[32m+[m[32m.social-logo{[m
[32m+[m[32m  width: 18px;[m
[32m+[m[32m  height: 18px;[m
[32m+[m[32m  margin-right: 8px;[m
[32m+[m[32m}[m
[32m+[m[32m.remember-me{[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  color: #555;[m
[32m+[m[32m  gap: 8px;[m
[32m+[m[32m}[m
[32m+[m[32m.remember-me input[type='checkbox']{[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m.first-step{[m
[32m+[m[32m    width: 100px;[m
[32m+[m[32m    height: 100px;[m
[32m+[m[32m    border-radius: 50%;[m
[32m+[m[32m    background-color: white;[m
[32m+[m[32m    /* centering the number in the circle*/[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    margin-left: 5px;[m
[32m+[m[32m    margin-right: 5px;[m
[32m+[m[32m      margin-bottom:100%;[m
[32m+[m[41m      [m
[32m+[m
[32m+[m[32m}[m
[32m+[m[32m.first-step:hover{[m
[32m+[m[32m    background-color: rgb(133, 6, 133);[m
[32m+[m[32m    transform: scale(1.1);[m
[32m+[m[32m}[m
[32m+[m[32m.second-step{[m
[32m+[m[32m    width: 100px;[m
[32m+[m[32m    height: 100px;[m
[32m+[m[32m    border-radius: 50%;[m
[32m+[m[32m    background-color: white;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    margin-left: 5px;[m
[32m+[m[32m    margin-right: 5px;[m
[32m+[m[32m      margin-bottom: 100%;[m
[32m+[m[41m    [m
[32m+[m[32m}.second-step:hover{[m
[32m+[m[32m    background-color: rgb(133, 6, 133);[m
[32m+[m[32m    transform: scale(1.1);[m
[32m+[m[32m}[m
[32m+[m[32m.third-step{[m
[32m+[m[32m    width: 100px;[m
[32m+[m[32m    height: 100px;[m
[32m+[m[32m    border-radius: 50%;[m
[32m+[m[32m    background-color: white;[m[41m [m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m    margin-left: 5px;[m
[32m+[m[32m    margin-right: 5px;[m
[32m+[m[32m    margin-bottom: 100%;[m
[32m+[m[41m    [m
[32m+[m[32m}.third-step:hover{[m
[32m+[m[32m    background-color:rgba(133,6,133);[m
[32m+[m[32m    transform: scale(1.1);[m
[32m+[m[32m}.steptodo{[m
[32m+[m[32m    font-size:xx-large;[m
[32m+[m[32m    font-weight: 5000;[m
[32m+[m[32m    margin:10px 10px 10px 10px;[m
[32m+[m[32m    color: black;[m
[32m+[m[32m}[m
[32m+[m[32m.first,.second,.third{[m
[32m+[m[32mmargin-left: 10px;[m
[32m+[m[32mmargin-right: 10px;[m
[32m+[m[32m/* display:block; */[m
[32m+[m[32mdisplay: flex;[m
[32m+[m[32mflex-direction: column;[m
[32m+[m[32malign-items: center;[m
[32m+[m[32m/* gap: 15px; */[m
[32m+[m[32mjustify-content:space-between;[m
[32m+[m[32m}[m
[32m+[m[32m.description{[m
[32m+[m[32m  color: black;[m
[32m+[m[32m  font-weight: 800;[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/pages/login.jsx b/src/pages/login.jsx[m
[1mindex f24c76b..c9389e7 100644[m
[1m--- a/src/pages/login.jsx[m
[1m+++ b/src/pages/login.jsx[m
[36m@@ -7,7 +7,7 @@[m [mexport default function Login() {[m
   return ([m
     <div className='login-container'>[m
       <div className='box' id='left'>[m
[31m-        <form action='#' className='login-form'>[m
[32m+[m[32m        <form action='submit' className='login-form'>[m
           <img src='floatchatlogo.png' alt='FloatChat logo' className='top-logo' />[m
           <h2 className='page-title'>Sign in</h2>[m
           <p className='signup-link'>[m
[36m@@ -35,15 +35,20 @@[m [mexport default function Login() {[m
         </div>[m
       </div>[m
       <div className='box' id='right'>[m
[31m-        <div className='steps'>[m
[31m-          <div className='step'>[m
[31m-            <h1>1</h1>[m
[31m-            <p>Step 1 description</p>[m
[31m-          </div>[m
[31m-          <div className='step'>[m
[31m-            <h1>2</h1>[m
[31m-            <p>Step 2 description</p>[m
[31m-          </div>[m
[32m+[m[32m        <div className="first">[m[41m [m
[32m+[m[32m          <p className='description'>Create Account</p>[m
[32m+[m[32m          <div className="first-step"><h1 className='steptodo'>1</h1></div>[m
[32m+[m[41m         [m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="second">[m
[32m+[m[32m          <p className='description'>Select Data Sources</p>[m
[32m+[m[32m          <div className="second-step"><h1 className='steptodo'>2</h1></div>[m
[32m+[m[41m          [m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div className="third">[m
[32m+[m[32m          <p className='description'>Get Data</p>[m
[32m+[m[32m          <div className="third-step"><h1 className='steptodo'>3</h1></div>[m
[32m+[m[41m          [m
         </div>[m
       </div>[m
     </div>[m
