import * as React from 'react';
import * as DOM from 'react-dom';
import HelloWorld from './helloworld';

const root = document.getElementById('app');

class Main extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	public render() {
		return (
            <div>
              <HelloWorld defaultName='World' />
            </div>
        );
	}
}

DOM.render(<Main />, root);  