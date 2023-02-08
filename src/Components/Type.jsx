import TypeWriter from 'typewriter-effect'
import "./Type.scss"
export default function Type(){
    return (
       <>
        <TypeWriter
        
        options={{
            strings:[ 'Full Stack web Developer....','Bahadurgarh, Haryana...','Creative....','Enthusiastic...'],
            autoStart: true,
            loop: true,
            deleteSpeed:90,
        }}
        
        />
       </>
      
    )
}