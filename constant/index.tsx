import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiLock } from "react-icons/fi";
import { LuBookOpenCheck } from "react-icons/lu";

export const nav_links = [
    {
        id: 'home',
        link: "home",
    },
    {
        id: 'feature',
        link: "feautres"
    },
    {
        id: 'works',
        link: "how it works"
    }
]

export const features = [
    {
        id: 'feat_1',
        icon: <MdOutlineAutoAwesomeMosaic />,
        title: "Smart AI Summaries",
        content: "Instantly condense long notes into short, easy-to-digest."
    },
    {
        id: 'feat_2',
        icon: <HiOutlineDocumentText />,
        title: "PDF & DOC Support",
        content: "Upload your notes in PDF or Word format, we’ll do the rest."
    },
    {
        id: 'feat_3',
        icon: <FiLock />,
        title: "Secure & Private",
        content: " Your files and summaries are stored securely and never shared."
    },
    {
        id: 'feat_4',
        icon: <LuBookOpenCheck />,
        title: "Study-Ready Output",
        content: "Get structured summaries perfect for revision, studying, or quick referencing."
    },
]

export const works = [

    {
        title: "Upload Your Note",
        content: "Drag and drop your file or paste your content directly into the app."
    },
    {
        title: "AI Processes the Text",
        content: "Our AI scans your document, identifies key points, and generates a summary."
    },
    {
        title: "Get Your Summary",
        content: "Instantly receive a well-structured summary you can save, copy, or download."
    },
]