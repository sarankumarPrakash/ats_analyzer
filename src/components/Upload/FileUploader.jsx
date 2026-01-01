import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, File as FileIcon, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function FileUploader({ onFileSelect, selectedFile, accept = { 'application/pdf': ['.pdf'] }, label = "Upload Resume PDF" }) {
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles?.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        maxFiles: 1,
        multiple: false
    });

    const removeFile = (e) => {
        e.stopPropagation();
        onFileSelect(null);
    };

    return (
        <div className="w-full">
            {!selectedFile ? (
                <div
                    {...getRootProps()}
                    className={cn(
                        "relative group cursor-pointer w-full h-64 rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center gap-4 bg-white/5",
                        isDragActive ? "border-primary bg-primary/10" : "border-white/20 hover:border-primary/50 hover:bg-white/10"
                    )}
                >
                    <input {...getInputProps()} />
                    <div className={cn(
                        "p-4 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20",
                        isDragActive && "bg-primary/20 scale-110"
                    )}>
                        <UploadCloud size={32} className={cn("text-slate-400 group-hover:text-primary", isDragActive && "text-primary")} />
                    </div>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-medium text-slate-200">
                            {isDragActive ? "Drop it here!" : label}
                        </p>
                        <p className="text-sm text-slate-400">Drag & drop or click to browse</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">PDF only, max 5MB</p>
                </div>
            ) : (
                <div className="relative w-full p-4 rounded-2xl glass border border-primary/30 flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        <FileIcon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{selectedFile.name}</p>
                        <p className="text-xs text-slate-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                        onClick={removeFile}
                        className="p-2 rounded-full hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                        title="Remove file"
                    >
                        <X size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}
