"use client";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { EditorField } from "@/components/form/EditorField.tsx";
import InputField from "@/components/form/InputField";
// import TextEditor from "@/components/form/TextEditor.tsx";

const NewsForm2 = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            shortDescription: "",
            tagList: [],
            fullDescription: "Thanh",
        },
    });

    const handleLoginSubmit = async (formValues) => {
        console.log(formValues);
        const payload = new FormData();
        const response = await fetch("/api/news", {
            method: "POST",

            body: formValues,
        });
    };
    return (
        <form
            action="/api/news"
            method="POST"
            encType="multipart/form-data"
            className=""
        >
            <InputField
                name="title"
                label="Title"
                placeholder="Your Work Title"
                control={control}
            />

            <EditorField
                name="fullDescription"
                control={control}
                label="Full Description"
            />

            <Button type="submit">Upload</Button>
        </form>
    );
};
export default NewsForm2;
