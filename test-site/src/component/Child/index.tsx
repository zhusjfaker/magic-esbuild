import { Button } from "antd";
import React from "react";

export default class Child extends React.Component {
	render() {
		return (
			<div className={"test"}>
				<div>Child</div>
				<Button>click me</Button>
			</div>
		);
	}
}