import React, { useState, useEffect} from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response)); //?があるのである時だけ実行
    }, [props])
    
    return (
        <div>
            <ul>
                {
                bookData === null
                ? <p>now loading...</p>
                : bookData.data.items.map(x => 
                    <li>題名：{x.volumeInfo.title}  /著者：{x.volumeInfo.authors}</li>
                    )
                 }
            </ul>
            {/* <p>This is {JSON.stringify(bookData)} list components </p> */}
        </div>
    )
}

export default Booklist;
