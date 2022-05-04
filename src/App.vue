<script>
import Header from './components/Header/Header.vue';
import Filter from './components/Filter/Filter.vue';
import LatestBooks from './components/HomePage/LatestBooks.vue';
import ResultBook from './components/Search/ResultBook.vue';
export default{
    data(){
        return{
            searchedBooks:[
                {
                    bookName:"A Thousand Splendid Suns - Khaled Hosseini",
                    bookDate:"May 22, 2007",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"1300",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"Ikigai - Khaled Hosseini",
                    bookDate:"May 22, 2007",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"1300",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"A Thousand Splendid Suns - Khaled Hosseini",
                    bookDate:"May 22, 2007",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"1300",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                }
            ]
        }
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook
}
}
</script>

<template>
    <div class="relative" >
        <!-- Header -->
        <div class="">
            <Header class="fixed w-full top-0" />
        </div>
        
        <!-- Filter -->
            <div class="mt-24 absoulute ml-7">
                <div class="">
                    <p>Home / Books</p>
                    <div class="h-96 w-full">
                        <Filter />
                    </div>
                </div>
            </div>

        <div class="absolute top-10 left-96">
            <div class="flex items-baseline">
                <div class="mr-5 font-medium text-lg text-gray-800">Results for</div>
                <div class="text-gray-">"Self Development"</div>
            </div>
            <div class="w-240">
                <div v-for="item in searchedBooks" :key="item.id">
                    <ResultBook :bookName="item.bookName" :bookDate="item.bookDate" :bookLanguage="item.bookLanguage" :bookCover="item.bookCover" :bookPrice="item.bookPrice" :bookImageUrl="item.bookImageUrl"/>
                </div>
            </div>
        </div>
        

        
    </div>
    
        
</template>

<style>
</style>