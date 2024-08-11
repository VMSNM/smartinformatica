import { CircularProgress, Stack, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BodyText, BodyTextTitle, LoadingBox } from '../../../../styles/main'
import { getRandomInt } from '../../../../utils/useful';

const Quotes = () => {
    const [quoteFeatured, setQuoteFeatured] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGetQuotes = async () => {
        setLoading(true);
        const result = await fetch('https://type.fit/api/quotes');
        const quotesData = await result.json();
        if (quotesData) {
            let quoteIdx = getRandomInt(quotesData?.length);
            setQuoteFeatured({
                text: quotesData[quoteIdx].text,
                author: quotesData[quoteIdx].author.substring(0, quotesData[quoteIdx]?.author.length - 10)
            });
        }
        setLoading(false);
    }

    useEffect(() => {
        handleGetQuotes();
    }, []);

    if (!quoteFeatured || loading) return <LoadingBox><CircularProgress /></LoadingBox>
    
    return (
        <StyledStack direction={'row'} gap={1} alignItems={'center'}>
            <BodyText variant='caption' sx={{fontStyle:'italic'}}>"{quoteFeatured?.text}"</BodyText>
            <BodyText variant='caption'>{quoteFeatured?.author}</BodyText>
        </StyledStack>
    )
}

export default Quotes;

const StyledStack = styled(Stack)(({ theme }) => ({
    flexDirection:'row',
    alignItems:'center',
    gap:'10px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));