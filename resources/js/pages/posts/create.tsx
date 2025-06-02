import InputT from '@/components/foodis/input';
import TextareaBlog from '@/components/foodis/textarea-blog';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const CreatePosts = ({ name, value, type,label }) => {
    const [chosenFiles, setChosenFiles] = useState([]);
        const [newMessage, setNewMessage] = useState("");
        const [newImage, setNewImage] = useState("");
        const [inputEerrorMessage, setInputEerrorMessage] = useState("");
        const [uploadProgress, setUploadProgress] = useState(0);


    // const onFileChange = (ev) => {
    //     const files = ev.target.files;
    //     const updatedFiles = [...files].map((file) => {
    //         return {
    //             file: file,
    //             url: URL.createObjectURL(file),
    //         };
    //     });
    //     ev.target.value = null;

    //     setChosenFiles((prevFiles) => {
    //         return [...prevFiles, ...updatedFiles];
    //     });
    // };

     const onSendClick = () => {
        // if (messageSending) return;
    
        if (newMessage.trim() === "" && chosenFiles.length === 0) {
            setInputEerrorMessage('Please provide a message or upload attachments.');
            setTimeout(() => setInputEerrorMessage(""), 3000);
            return;
        }
    
        const formData = new FormData();
        chosenFiles.forEach((file) => {
            formData.append("attachments[]", file.file);
        });
        formData.append("message", newMessage || ""); // تأكد أن message دائمًا string
    
       
            formData.append('receiver_id', conversation.id.toString()); // تحويل إلى string إذا كان رقمًا
       
    
        axios.post(route('message.store'), formData, {
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setUploadProgress(progress);
            },
        })
        .then((response) => {
            setNewMessage('');
          
            setChosenFiles([]);
        })
        .catch((error) => {
            console.error("Full error response:", error.response?.data); // اطبع تفاصيل الخطأ
            setChosenFiles([]);
            const errorMessage = error.response?.data?.message || "Failed to send message";
            setInputEerrorMessage(errorMessage);
        });
    };
    return (
        <AppLayout>
            <Head title="Home" />
            <>
                <InputT label="Title" value={newMessage} onSend={onSendClick} onChange={(ev) => setNewMessage(ev.target.value)}  />
                <InputT label="Link Image" value={newImage} onSend={onSendClick} onChange={(ev) => setNewImage(ev.target.value)}  />
                {/* <InputT label="File"  type="file" accept="image/*" onChange={onFileChange} /> */}

                <TextareaBlog />
                <button onClick={onSendClick} className="btn btn-info rounded-l-none">
                                        { <span className="loading loading-spinner loading-xs"></span>}
                
                                        <PaperAirplaneIcon className="w-6" />
                                        <span className="hidden sm:inline">Send</span>
                                    </button>
            </>
        </AppLayout>
    );
};
export default CreatePosts;
