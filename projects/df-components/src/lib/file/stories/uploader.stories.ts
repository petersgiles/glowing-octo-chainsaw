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
import * as Readme from "./README.md"
import { FileModule } from '../file.module';
import { MdcButtonModule } from '@angular-mdc/web';

@Component({
	selector: "app-file-uploader",
	template: `
		<df-file-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[accept]="accept"
			[multiple]="multiple"
			[(files)]="files"
			(filesChange)="handleChange($event)">
		</df-file-uploader>
		<button mdc-button *ngIf="files && files.size > 0" (click)="onUpload()">
			Upload
		</button>
	`
})
class FileUploaderStory {
	static notificationCount = 0;

	@Input() notificationId = `notification-${FileUploaderStory.notificationCount}`;
	@Input() files: any;
	@Input() title;
	@Input() description;
	@Input() buttonText;
	@Input() accept;
	@Input() multiple;

	@Output() onFilesChange = new EventEmitter()

	protected maxSize = 500000;

	constructor(
       // protected notificationService: NotificationService
        ) {
		FileUploaderStory.notificationCount++;
	}

	handleChange($event) {
		this.onFilesChange.emit({$event, files: this.files})
	}

	onUpload() {
		this.files.forEach(fileItem => {
			if (fileItem.file.size > this.maxSize) {

			}
		});

		let filesArray = Array.from<any>(this.files);
		if (filesArray.every(fileItem => fileItem.file.size <= this.maxSize)) {
            this.files.forEach(fileItem => {
                if (!fileItem.uploaded) {
					fileItem.state = "upload";
					setTimeout(() => {
						fileItem.state = "complete";
						fileItem.uploaded = true;
						console.log(fileItem);
					}, 1500);
				}
			});
		}
	}
}


storiesOf("File Uploader", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				FileModule,
				MdcButtonModule
			],
			declarations: [FileUploaderStory]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<app-file-uploader
				[title]="title"
				[description]="description"
				[buttonText]="buttonText"
				[accept]="accept"
				[multiple]="multiple"
				(onFilesChange)="handleEvent($event, 'onFilesChange')">
			</app-file-uploader>
		`,
		props: {
			title: text("The title", "Upload Stuff"),
			description: text("The description", "only .jpg and .png files. 500kb max file size."),
			buttonText: text("Button text", "Add files"),
			accept: array("Accepted file extensions", [".png", ".jpg"], ","),
			multiple: boolean("Supports multiple files", true),
			handleEvent: ($event, name) => action(name)($event)
		}
	}))