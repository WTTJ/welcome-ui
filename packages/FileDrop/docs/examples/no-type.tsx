import * as React from 'react'
import { FileDrop } from '@welcome-ui/file-drop'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <>
      <FileDrop
        forceFileType="image"
        handleAddFile={handleChange}
        handleRemoveFile={handleChange}
        name="file1"
        value="https://cdn-images.welcomehome.io/zn9KvR98haoYRV6m1T-LR4c5h0HPZtVtvzwKPv02wgA/rs:auto:600::/q:100/czM6Ly93aC1wcml2YXRlLXByb2R1Y3Rpb24vcHJvZHVjdGlvbi91cGxvYWRzL3doL2Jsb2Nrcy9iZTI2MTc4OC1mYjc5LTRlZTQtYjQ4OC04ZDhiYTk4YTY3NDIvY292ZXIvdHdpdHRlckB4Mi5wbmc"
      />
      <FileDrop
        forceFileType="audio"
        handleAddFile={handleChange}
        handleRemoveFile={handleChange}
        name="file2"
        value="https://cdn-images.welcomehome.io/zn9KvR98haoYRV6m1T-LR4c5h0HPZtVtvzwKPv02wgA/rs:auto:600::/q:100/czM6Ly93aC1wcml2YXRlLXByb2R1Y3Rpb24vcHJvZHVjdGlvbi91cGxvYWRzL3doL2Jsb2Nrcy9iZTI2MTc4OC1mYjc5LTRlZTQtYjQ4OC04ZDhiYTk4YTY3NDIvY292ZXIvdHdpdHRlckB4Mi5wbmc"
      />
    </>
  )
}

export default Example
