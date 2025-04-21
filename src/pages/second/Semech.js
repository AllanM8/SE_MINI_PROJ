import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from '../../components/layouts/footer/Footer';

const Semech = () => {
    return(<>
    <Navbar darkTheme={true}/>
        <div className="card-container">
        <div className="card">
          <h3>Engineering Mathematics -III</h3>  
          <p> Higher Engineering Mathematics, Dr. B. S. Grewal, Khanna Publication</p> 
          <p>Advanced Engineering Mathematics, Erwin Kreyszig, Wiley Eastern Limited, 9th Ed.</p>   
          <p>Advanced Engineering Mathematics, R. K. Jain and S.R.K. Iyengar, Narosa publication  </p>
          <p>Advanced Physics, R. K. Jain and S.R.K. Iyengar, Narosa publication  </p>
          
        
        </div>
        <div className="card">
            <h3> Strength of Materials</h3>  
            <p>Strength of Materials by Ryder, Macmillan </p> 
            <p>Mechanics of Materials by James M. Gere and Barry J. Goodno, Cengage Learning, 6thEd, 2009  </p>   
            <p>Mechanics of Materials by Gere and Timoshenko, CBS 2nd Edition   </p> 
            
            
        </div>   
        <div className="card">
            <h3>Production Processes </h3>  
            <p> Welding technology by O P Khanna  </p> 
            <p> Foundry technology by O P Khanna   </p>   
            <p> Elements of workshop technology. Vol. 1 & II by S K HajraChoudhury  </p>
            
            
        </div>   
        <div className="card">
            <h3>Materials and Metallurgy </h3>  
            <p> Callister’s Materials Science and Engineering, 2nd edition by R.Balasubramanium Wiley India Pvt. Ltd </p> 
            <p> Introduction to Materials Science for Engineers; 8th Edition by James F. Shackelford Pearson  </p>   
            <p> Introduction to Physical Metallurgy,2nd edition by Sidney Avner, TataMcGrawHill </p>
            
        </div> 
        <div className="card">
            <h3> Thermodynamics</h3>  
            <p> Thermodynamics: An Engineering Approach by Yunus A. Cengel and Michael A. Boles, 9 th edition, TMH</p> 
            <p> Vincent Del Toro ―Electrical Engineering Fundamentals‖, PHI Second edition, 2011  </p>   
            <p> Edward Hughes ―Hughes Electrical and Electronic Technology‖, Pearson Education (Tenth edition)</p>
            
          
        </div> 
        <div className="card">
          <h3> Engineering Mathematics-IV</h3>  
           <p>Higher Engineering Mathematics, Dr. B. S. Grewal, Khanna Publication</p> 
           <p>Advanced Engineering Mathematics, Erwin Kreyszig, Wiley Eastern Limited,  </p>
           <p>Advanced Engineering Mathematics, R. K. Jain and S. R. K. Iyengar, Narosa publication, </p>
           
        </div> 
        <div className="card">
            <h3> Fluid  Mechanics</h3>  
          <p>Fluid Mechanics by Yunus A Cengel and John M Cimbala, Tata McGraw Hill Education, 3 rd Edition, 2014. </p> 
          <p>Fluid Mechanics and Machinery by C S P Ojha, Chandramouli and R Berndtsson, Oxford University Press, 1st Edition, 2010</p>   
          <p>Fox and McDonald's Introduction to Fluid Mechanics by Philip J. Pritchard and John W. Mitchell, Wiley Publishers, 9th Edition,2016. </p> 
          
        </div>
        <div className="card">
            <h3> Kinematics of Machinery</h3>
            <p> Ghosh and A.K. Mallik, “Theory of Mechanisms and Machines”, East-West Press</p>
            <p> S.S. Ratan, “Theory of Machines”, Tata McGraw Hill </p>
            <p> . J.J. Uicker, G.R. Pennock, and J.E. Shigley, “Theory of Machines and Mechanism”, Oxford Higher Education </p>
            
        </div>
        <div className="card">
            <h3> CAD/CAM </h3>    
            <p> AD/ CAM, Theory & Practice, Ibrahim Zeid, R. Sivasubramanian, Tata McGraw Hill Publications</p> 
            <p>CAD/CAM Principles and Applications, P. N. Rao, Tata McGraw Hill Publications </p>
            <p>CAD/CAM Computer Aided and Manufacturing, Mikell P. Groover and Emory W. Zimmers, Jr., Eastern Economy Edition </p>
            
        </div>
       <div className="card">
            <h3>Industrial Electronics</h3> 
            <p> Power Electronics M.H. Rashid, Prentice-Hall of Indi  </p> 
            <p> Power Electronics, P S Bhimbra</p>
            <p> Power Electronics, VedamSubramanyam, New Age International</p>
       </div>    
    
        
        
    </div>
    <Footer />
    </>
    )
}
export default Semech;