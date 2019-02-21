import { Component, Input } from "@angular/core";
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

@Component({
	selector: "app-file-uploader",
	template: `
		<df-uploader
			[title]="title"
			[description]="description"
			[buttonText]="buttonText"
			[accept]="accept"
			[multiple]="multiple"
			[(files)]="files">
		</df-uploader>
		<div [id]="notificationId" style="width: 300px; margin-top: 20px"></div>
		<button *ngIf="files && files.size > 0" (click)="onUpload()">
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

	protected maxSize = 500000;

	constructor(
       // protected notificationService: NotificationService
        ) {
		FileUploaderStory.notificationCount++;
	}

	onUpload() {
		this.files.forEach(fileItem => {
			if (fileItem.file.size > this.maxSize) {
				// this.notificationService.showNotification({
				// 	type: "error",
				// 	title: `'${fileItem.file.name}' exceeds size limit`,
				// 	message: `500kb max size. Please select a new file and try again`,
				// 	target: `#${this.notificationId}`
				// });
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
			imports: [FileModule],
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
				[multiple]="multiple">
			</app-file-uploader>
		`,
		props: {
			title: text("The title", "Upload Stuff"),
			description: text("The description", "only .jpg and .png files. 500kb max file size."),
			buttonText: text("Button text", "Add files"),
			accept: array("Accepted file extensions", [".png", ".jpg"], ","),
			multiple: boolean("Supports multiple files", true)
		}
	}))