import { Component, Input, Output, EventEmitter } from "@angular/core";
import { storiesOf, moduleMetadata } from '@storybook/angular';
import {
	withKnobs,
	boolean,
	text,
	array
} from '@storybook/addon-knobs';

import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"
import { FileModule } from '../file.module';
import { MdcButtonModule } from '@angular-mdc/web';

@Component({
	selector: "app-file-dropper",
	template: `<df-file-dropper></df-file-dropper>`
})
class FileDropperStory {

}

storiesOf("File Dropper", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				FileModule,
				MdcButtonModule
			],
			declarations: [FileDropperStory]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `<app-file-dropper></app-file-dropper>`,
		props: {
			
			handleEvent: ($event, name) => action(name)($event)
		}
	}))