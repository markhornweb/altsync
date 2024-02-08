import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import logo from "./assets/logo.svg";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<div className="main-container container create_video monitor_page">
			<div className="logo-container text-center">
				<img src={logo} className="logo" width="213" height="51" viewBox="0 0 213 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></img>
			</div>

			<h1>Sign in to continue</h1>
			<p className="text-center">You must have a valid trial or plan account to continue.  Please visit https://altsync.io. </p>

			<div className="tab-content">
				<div className="tab-pane container sessions-container active form_par" id="manual_data">
					<div className="form_par form_par__new  manual_data__form pt-0">
						<form className="form-horizontal new-session-form" role="form" action="">

							<div className="form-group">
								<label for="name">Username</label>
								<input name="username" type="text" id="username"
									className="form-control input-lg" placeholder="username" />
							</div>

							<div className="form-group">
								<label for="name">Password</label>
								<input name="password" type="password" id="password"
									className="form-control input-lg" placeholder="password" />
							</div>

							<div className="form-group pb-md-5">
								<div className="text-center save-delete_box">
									<button id="login" type="submit" className="btn btn-green">Log In</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
