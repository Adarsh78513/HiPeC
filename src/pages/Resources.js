import LinkButton from "../cpmponents/LinkButton";

const Resources = () => {
    return (
        <div className="resources-outer">
            <div className="resources">
                <h1>Open-sourced Softwares from our Research</h1>
                <div className="resources-content">
                    <LinkButton link='http://vivkumar.github.io/ajws.html' text='AJWS'/>
                    <p>Atomic Java with work-stealing. It draws together the benefits of work-stealing and data-centric atomicity, allowing the application programmer to conveniently and succinctly expose the parallelism inherent in their Java program. [PPPJ 2016]</p>
                </div>

                <div className="resources-content">
                    <LinkButton link='http://habanero-rice.github.io/hclib/' text='HClib'/>
                    <p>This is a compiler-free work-stealing library, which supports <a href="https://wiki.rice.edu/confluence/display/HABANERO/Habanero-C" >Habanero-C</a> work-stealing constructs. [IPDPSW 2017 and PGAS 2014] </p>    
                </div>

                <div className="resources-content">
                    <LinkButton link='http://habanero-rice.github.io/habanero-upc/' text='Habanero-UPC++'/>
                    <p>Its a compiler-free PGAS library, which supports a tighter integration of intra-place and inter-place parallelism than standard hybrid programming approaches. [PGAS 2014]</p>                
                </div>

                <div className="resources-content">
                    <LinkButton link='http://vivkumar.github.io/javatrycatchws.html' text='Java TryCatchWS'/>
                    <p>An extremely light-weight work-stealing runtime implementation in Java that uses runtime mechanism already existing inside modern JVMs, such as garbage collection, on-stack replacement, dynamic code patching, and exception handling. [VEE 2014 and OOPSLA 2012]</p>                
                </div>

                <p>Details of the open-sourced softwares from HiPeC lab can be found <a href="https://github.com/hipec/">here</a>.</p>
            </div>
        </div>
    );
}

export default Resources;