import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import './CreatePostModal.css'
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'

const CreatePostModal = ({ onClose, isOpen }) => {

	const [isDragOver, SetIsDragOver] = useState();
	const [file, setFile] = useState();
	const [caption, setCaption] = useState("");

	const handleDragOver = (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "copy";
		SetIsDragOver(true);
	}
	const handleDragLeave = () => {
		SetIsDragOver(false);
	}

	const handleDrop = (e) => {
		e.preventDefault();
		const droppedFile = e.dataTransfer.file[0];
		if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
			setFile(droppedFile);
		}
	}

	const handleOnChange = (e) => {
		const file = e.target.files[0];
		if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
			setFile(file);
			console.log("file : ", file);
		} else {
			setFile(null);
			alert("Please Select an Image or Video");
		}
	}

	const handleCaptionChange = (e) => {
		setCaption(e.target.value);
	}

	return (
		<div>
			<Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<div className='flex justify-between py-1 px-10 items-center'>
						<p>Create New Post</p>
						<Button className='' variant={"ghost"} size={'sm'} colorScheme={'blue'}>
							Share
						</Button>
					</div>
					<hr />
					<ModalBody>
						<div className='h-[70vh] flex justify-between pb-5'>
							{/* Left */}
							<div className='w-[50%]'>
								{file ? (
									<div className='flex justify-center items-center pr-5 h-full'>
										<img className='max-h-full' src={URL.createObjectURL(file)} alt="" />
									</div>
								) : (
									<div
										onDrop={handleDrop}
										onDragOver={handleDragOver}
										onDragLeave={handleDragLeave}
										className='drag-drop h-full'>
										<div>
											<FaPhotoVideo className='text-3xl' />
											<p>Drag Photos and Videos here</p>
										</div>
										<label htmlFor="file-upload" className='custom-file-upload'>
											Select From Computer</label>
										<input
											type="file"
											id='file-upload'
											accept='image/*, video/*'
											onChange={handleOnChange} />
									</div>
								)}
							</div>

							<div className='w-[1px] border h-full'></div>

							{/* Right */}
							<div className='w-[50%]'>
								<div className='flex items-center px-2'>
									<img
										className='w-7 h-7 rounded-full'
										src="https://cdn.pixabay.com/photo/2023/06/26/13/41/wolf-8089783_640.jpg"
										alt="" />
									<p className='font-semibold ml-4'>userName</p>
								</div>
								<div className='px-2'>
									<textarea
										placeholder='Write a Caption'
										className='captionInput'
										name='caption'
										rows="8"
										onChange={handleCaptionChange}
									></textarea>
								</div>

								<div className='flex justify-between px-2'>
									<GrEmoji />
									<p className='opacity-70'>{caption?.length} / 2,200</p>
								</div>
								<hr />

								<div className='flex justify-between items-center p-2'>
									<input className='locationInput' type="text" placeholder='location' name="location" />
									<GoLocation />
								</div>
								<hr />
							</div>
						</div>
					</ModalBody>

				</ModalContent>
			</Modal>
		</div>
	)
}

export default CreatePostModal