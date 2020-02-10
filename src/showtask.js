import React from "react";
import {COMPLETED} from "./App";

class ShowTasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map((obj) => {
                            return (
                                <div key={obj.id}><input type="checkbox" defaultChecked={obj.isChecked == COMPLETED}
                                                         onChange={(e) => {
                                                             this.props.toggle(obj.id)
                                                         }}/>
                                    {obj.task}
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default ShowTasks