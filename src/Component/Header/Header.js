import React from 'react';
import bg from '../../resources/16 [Converted]@2x.png';

const Header = () => {
    return (
        <div className='d-flex flex-wrap px-5 mt-5 ' style={{ overFlow: 'hidden' }}>
            <div className='mt-5 col-md-4 d-flex align-items-center container'>
                <div className='container container-fluid'>
                    <h1 className='specialTexts header-text'>
                        Florence  <br />
                    Agency
                </h1>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi rem eos earum explicabo sunt voluptatum cupiditate odit sit laudantium, nobis optio quasi neque autem repellat aperiam a voluptas vel.</p>
                    <button>See Pricing</button>
                </div>
            </div>
            <div className='col-md-6 justify-content-end'>
                <img className="img-fluid ml-5" style={{ height: '70vh' }} src={bg} alt="" />
            </div>
        </div>
    );
};

export default Header;