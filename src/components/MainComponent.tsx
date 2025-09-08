import './styles.css';

interface MainComponentProps {
    text: string;
  }
  




export const MainComponent: React.FC<MainComponentProps> = ({text}) => {

    return (
        <div className="main">
            <div className="headerMenu">
                <button className="button">Цена</button>
                <button className="button">Гости</button>
                <button className="button">Даты</button>
                <button className="button">Прочее</button>
            </div>
            
            <h1 className='title'>{text}</h1>

        </div>
    )
}