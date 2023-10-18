/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentPage {
  title: string;
};
class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentPage> {
  pageInfo (): void {
    console.log(this.props.title);
  }
}

export {};