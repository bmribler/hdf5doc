gXMLBuffer ="<?xml version=\"1.0\" encoding=\"utf-8\" ?><data>   <entry name=\"attribute\" value=\"An HDF5 attribute&#160;is a small metadata object describing the nature and/or intended usage of a primary data object. A primary data object may be a dataset, group, or committed datatype.\" />   <entry name=\"chunked dataset\" value=\"The data of a dataset may be stored as fixed-size chunks. See the figure below. A chunk is a hyper-rectan­gle of any shape. When a dataset is chunked, each chunk is read or written as a single I/O operation, and individually passed from stage to stage of the data pipeline.\" />   <entry name=\"chunked storage\" value=\"The dataset is stored as fixed-size chunks.\" />   <entry name=\"committed datatype\" value=\"A datatype can be shared by more than one dataset in the file if the datatype is saved to the file with a name. This shareable datatype is known as a committed datatype. In the past, this kind of datatype was called a named datatype.\" />   <entry name=\"compact dataset\" value=\"A small dataset may be stored in a continuous array of bytes in the header block using the compact stor­age option. This dataset can be read entirely in one operation which retrieves the header and data. The dataset must fit in the header. This may vary depending on the metadata that is stored. In general, a com­pact dataset should be approximately 30 KB or less total size. See the figure below.\" />   <entry name=\"compact storage\" value=\"A small dataset is stored in the metadata header.\" />   <entry name=\"composite datatype\" value=\"In addition to atomic datatypes, the HDF5 Library supports composite datatypes. A composite datatype is an aggregation of one or more datatypes. Each class of composite datatypes has properties that describe the organization of the composite datatype. See the figure below. Composite datatypes include:\" />   <entry name=\"compound\" value=\"To create and use a compound datatype, you need to create a datatype with class compound (H5T_COM­POUND) and specify the total size of the data element in bytes. A compound datatype consists of zero or more uniquely named members. Members can be defined in any order but must occupy non-overlapping regions within the datum. The table below lists the properties of compound datatype members.\" />   <entry name=\"compound datatype\" value=\"A compound datatype&#160;is a collection of one or more data elements. Each element might be an atomic type, a small array, or another compound datatype.\" />   <entry name=\"contiguous dataset\" value=\"A contiguous dataset is stored in the file as a header and a single continuous array of bytes. See the figure below. In the case of a multi-dimensional array, the data is serialized in row major order. By default, data is stored contiguously.\" />   <entry name=\"contiguous storage\" value=\"The dataset is stored as one continuous array of bytes.\" />   <entry name=\"dangling link\" value=\"Note that an object’s existence in a file is governed by the presence of at least one hard link to that object. If the last hard link to an object is removed, the object is removed from the file and any remaining soft link becomes a dangling link, a link whose target object does not exist.\" />   <entry name=\"data pipeline\" value=\"When data is written or read to or from an HDF5 file, the HDF5 Library passes the data through a sequence of processing steps which are known as the HDF5 data pipeline. This data pipeline performs operations on the data in memory such as byte swapping, alignment, scatter-gather, and hyperslab selec­tions. The HDF5 Library automatically determines which operations are needed and manages the organi­zation of memory operations such as extracting selected elements from a data block. The data pipeline modules operate on data buffers: each module processes a buffer and passes the transformed buffer to the next stage.\" />   <entry name=\"data transfer properties\" value=\"For some data transfers, additional parameters should be set using the transfer property list. The table below lists the categories of transfer properties. These properties set parameters for the HDF5 Library and may be used to pass parameters for optional filters and file drivers. For example, transfer properties are used to select independent or collective operation when using MPI-I/O.\" />   <entry name=\"dataset header\" value=\"A dataset header consists of one or more header messages containing persistent metadata describing various aspects of the dataset. These records are defined in the HDF5 File Format Specification. The amount of storage required for the metadata depends on the metadata to be stored. The table below summarizes the metadata.\" />   <entry name=\"dataset name\" value=\"A dataset name is a sequence of alphanumeric ASCII characters. The full name would include a tracing of the group hierarchy from the root group of the file. An example is /rootGroup/groupA/subgroup23/dataset1. The local name or relative name within the lowest-level group containing the dataset would include none of the group hierarchy. An example is Dataset1.\" />   <entry name=\"dataspace\" value=\"The dataspace of a dataset defines the number of dimensions and the size of each dimension. The dataspace defines the number of dimensions, and the maximum dimension sizes and current size of each dimension. The maximum dimension size can be a fixed value or the constant H5D_UNLIMITED, in which case the actual dimension size can be changed with calls to H5Dset_extent, up to the maximum set with the maxdims&#160;parameter in the H5Screate_simple&#160;call that established the dataset’s original dimensions. The maximum dimension size is set when the dataset is created and cannot be changed.\" />   <entry name=\"dataspace extent\" value=\"A simple dataspace, H5S_SIMPLE, is a multidimensional array of elements. The dimensionality of the dataspace (or the rank of the array) is fixed and is defined at creation time. The size of each dimension can grow during the life time of the dataspace from the current size&#160;up to the maximum size. Both the current size and the maximum size are specified at creation time. The sizes of dimensions at any particular time in the life of a dataspace are called the current dimensions, or the dataspace extent. They can be queried along with the maximum sizes.\" />   <entry name=\"dataspace selection\" value=\"The data transfer will transfer some or all of the elements of the dataset depending on the dataspace selection. The selection has two dataspace objects: one for the source, and one for the destination. These objects describe which elements of the dataspace to be transferred. Some (partial I/O) or all of the data may be transferred. Partial I/O is defined by defining hyperslabs or lists of elements in a dataspace object.\" />   <entry name=\"datatype\" value=\"Raw data has a datatype which describes the layout of the raw data stored in the file. The datatype is set when the dataset is created and can never be changed. When data is transferred to and from the dataset, the HDF5 Library will assure that the data is transformed to and from the stored format.\" />   <entry name=\"early allocation\" value=\"The table below shows the options for when data is allocated in the file. Early allocation is done during the dataset create call. Certain file drivers (especially MPI-I/O and MPI-POSIX) require space to be allocated when a dataset is created, so all processors will have the correct view of the data.\" />   <entry name=\"error description\" value=\"In the example above, we can see that an error record&#160;has a major message and a minor message. A major message&#160;generally indicates where the error happens. The location can be a dataset or a dataspace, for example. A minor message&#160;explains further details of the error. An example is “unable to open file”. Another specific detail about the error can be found at the end of the first line of each error record. This error description&#160;is usually added by the library designer to tell what exactly goes wrong. In the example above, the “predefined datatype” is an error description.\" />   <entry name=\"error record\" value=\"In the example above, we can see that an error record&#160;has a major message and a minor message. A major message&#160;generally indicates where the error happens. The location can be a dataset or a dataspace, for example. A minor message&#160;explains further details of the error. An example is “unable to open file”. Another specific detail about the error can be found at the end of the first line of each error record. This error description&#160;is usually added by the library designer to tell what exactly goes wrong. In the example above, the “predefined datatype” is an error description.\" />   <entry name=\"error stack\" value=\"Let us first try to understand the error stack. An error stack&#160;is a collection of error records. &#160;&#160;Error records can be pushed onto or popped off the error stack. By default, when an error occurs deep within the HDF5 Library, an error record is pushed onto an error stack and that function returns a failure indication. Its caller detects the failure, pushes another record onto the stack, and returns a failure indication. This con­tinues until the API function called by the application returns a failure indication. The next API function being called will reset the error stack. All HDF5 Library error records belong to the same error class. For more information, see &quot;Advanced Error Handling Operations&quot; on page&#160;329.\" />   <entry name=\"filters\" value=\"When a dataset is created, optional filters are specified. The filters are added to the data transfer pipeline when data is read or written. The standard library includes filters to implement compression, data shuf­fling, and error detection code. Additional user-defined filters may also be used.\" />   <entry name=\"hard link\" value=\"There are two kinds of links, hard links&#160;and symbolic links. Hard links are reference counted; symbolic links are not. When an object is created, a hard link is automatically created. An object can be deleted from the file by removing all the hard links to it.\" />  </data>";