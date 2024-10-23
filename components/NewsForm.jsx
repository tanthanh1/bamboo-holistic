"use client";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { EditorField } from "@/components/form/EditorField.tsx";
import InputField from "@/components/form/InputField";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import TextEditor from "@/components/form/TextEditor.tsx";

const NewsForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            shortDescription: "",
            tagList: [],
            fullDescription: "",
        },
    });

    const handleLoginSubmit = async (formValues) => {
        console.log(formValues);
        const payload = new FormData();
        payload.set("title", formValues.title);
        payload.set("content", formValues.fullDescription);
        payload.forEach((value, key) => {
            console.log(key, value);
        });
        const response = await fetch("/api/news", {
            method: "POST",

            body: payload,
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <label htmlFor="">Tiêu Đề: </label>
            <InputField
                name="title"
                label="Title"
                placeholder="Tiêu đề"
                control={control}
            />

            <EditorField
                name="fullDescription"
                control={control}
                label="Nội dung bài viết"
            />

            <Button type="submit">Upload</Button>
        </Box>
    );
};
export default NewsForm;
