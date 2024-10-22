"use client"
import Button from "../components/Button/Button";
import ListItens from "../components/ListItens/ListItens";
import ModalWithBackdrop from "../components/ModalWithBackdrop/ModalWithBackdrop";
import SideBar from "../components/SideBar.jsx/SideBar";
import {useState} from "react";




export default function ParkPage() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <SideBar />
            <ModalWithBackdrop show={showModal} onClose={() => setShowModal(false)}>
            teste
            </ModalWithBackdrop>

            <div className="  gap-2 flex flex-col flex-grow w-full justify-start items-end pl-24">
                <Button onClick={() => setShowModal(true)}>
                   
                </Button>

                <ListItens numeracao={"0001"}></ListItens>
                <ListItens numeracao={"0002"}></ListItens>
                <ListItens numeracao={"0003"}></ListItens>

            </div>


        </div>



    )

}